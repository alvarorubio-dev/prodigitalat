import { ImageResponse } from "npm:@vercel/og@0.6.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const image = new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            background: "linear-gradient(to right, #0f172a, #1e293b)",
            borderLeft: "20px solid #3b82f6",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "24px",
              letterSpacing: "4px",
            }}
          >
            PRODIGITAL.LAT
          </div>

          <div
            style={{
              color: "white",
              fontSize: "80px",
              fontWeight: "bold",
              lineHeight: "1.1",
              marginBottom: "32px",
            }}
          >
            Páginas Web para Contratistas en USA
          </div>

          <div
            style={{
              color: "#cbd5e1",
              fontSize: "40px",
              marginBottom: "56px",
            }}
          >
            Roofing • Plomería • Landscaping
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                borderRadius: "12px",
                padding: "20px 40px",
              }}
            >
              Listas en 72 Horas
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                border: "2px solid #475569",
                color: "#cbd5e1",
                fontSize: "28px",
                fontWeight: "bold",
                borderRadius: "12px",
                padding: "20px 40px",
              }}
            >
              100% en Español
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    const headers = new Headers(image.headers);
    Object.entries(corsHeaders).forEach(([k, v]) => headers.set(k, v));

    return new Response(image.body, {
      status: image.status,
      headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
