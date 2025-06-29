
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  credits INTEGER NOT NULL DEFAULT 0,
  subscription_status TEXT DEFAULT 'inactive' CHECK (subscription_status IN ('active', 'inactive', 'cancelled')),
  subscription_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tools table
CREATE TABLE public.tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  credit_cost INTEGER NOT NULL DEFAULT 1,
  webhook_url TEXT NOT NULL,
  input_schema JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tool usage history table
CREATE TABLE public.tool_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  tool_id UUID NOT NULL REFERENCES public.tools ON DELETE CASCADE,
  credits_used INTEGER NOT NULL,
  input_data JSONB NOT NULL DEFAULT '{}',
  output_data JSONB,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tool_usage ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Tools policies (public read access)
CREATE POLICY "Anyone can view active tools" ON public.tools
  FOR SELECT USING (is_active = true);

-- Tool usage policies
CREATE POLICY "Users can view own usage" ON public.tool_usage
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own usage" ON public.tool_usage
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, credits)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    100 -- Give new users 100 free credits
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample tools
INSERT INTO public.tools (name, description, credit_cost, webhook_url, input_schema) VALUES
('Text Summarizer', 'Summarize long text content into key points', 2, 'https://example.com/webhook/summarize', '{"text": "string"}'),
('Content Generator', 'Generate high-quality content based on prompts', 3, 'https://example.com/webhook/generate', '{"prompt": "string", "type": "string"}'),
('Data Extractor', 'Extract structured data from websites and documents', 5, 'https://example.com/webhook/extract', '{"url": "string"}'),
('Image Analyzer', 'Analyze and describe images using AI', 4, 'https://example.com/webhook/analyze-image', '{"image_url": "string"}');
