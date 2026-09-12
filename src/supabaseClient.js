import { createClient } from '@supabase/supabase-js';

// Reemplaza estas dos cadenas con tus credenciales reales de Supabase
const supabaseUrl = "https://dukutyembduduwlotcda.supabase.co"; 
const supabaseAnonKey = "sb_publishable_NV2_2t8Nd9zqASJva75-Ug_7J6xuR0r";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);