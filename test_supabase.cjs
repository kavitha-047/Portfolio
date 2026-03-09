const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://pptmnvqehteuomsxnlhw.supabase.co';
const supabaseAnonKey = 'sb_publishable_e_87q_kNHzOUM_30uYY-Vw_FSyQbzpr';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
    console.log("Testing Supabase connection...");
    try {
        const { data, error } = await supabase.from('messages').select('*').limit(1);
        if (error) {
            console.error("Error fetching messages:", error);
        } else {
            console.log("Successfully fetched data:", data);
            // Try to insert a test record
            console.log("Attempting insert...");
            const { error: insertError } = await supabase.from('messages').insert([
                { name: 'Test Bot', email: 'test@example.com', message: 'Hello from test script' }
            ]);
            if (insertError) {
                console.error("Error inserting message:", insertError);
            } else {
                console.log("Successfully inserted test message!");
            }
        }
    } catch (err) {
        console.error("Unexpected error:", err);
    }
}

test();
