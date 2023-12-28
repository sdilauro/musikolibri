export const sendContactForm = async (data: any) => fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export const sendNotice = async (data: any) => fetch('/api/notice', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})