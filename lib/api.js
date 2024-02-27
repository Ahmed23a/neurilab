const baseUrl = 'http://66.29.149.18:3000/api/v2/navItem'
export async function getDocuments() {
    let response = await fetch(baseUrl, { next: { revalidate: 30 } });
    response = await response.json()
    return response.data;
}
export async function getDocumentByTitle(title) {
    
    let response = await fetch(`${baseUrl}/${title}`, { next: { revalidate: 30 } });
    response = await response.json()
    console.log("ddddddddddd", response)
    return response.data;
}
