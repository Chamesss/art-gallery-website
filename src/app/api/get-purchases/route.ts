export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    return new Response(JSON.stringify({ dynamic }), {
        headers: {
            'content-type': 'application/json',
        },
    })
}
