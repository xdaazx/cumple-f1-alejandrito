import { createClient } from '@supabase/supabase-js';

// Reemplaza estas dos cadenas con tus credenciales reales de Supabase
const supabaseUrl = "https://tu-proyecto.supabase.co"; 
const supabaseAnonKey = "tu-clave-anon-key-larga-aqui";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);