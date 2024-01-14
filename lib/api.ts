export const sendAnmeldung = async (data: any) => fetch('/api/anmeldung', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export const sendAnmeldungToAdmin = async (data: any) => fetch('/api/anmeldung-to-admin', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export const sendKontakt = async (data: any) => fetch('/api/kontakt', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export const sendKontaktToAdmin = async (data: any) => fetch('/api/kontakt-to-admin', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})