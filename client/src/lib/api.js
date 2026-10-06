const API=import.meta.env.VITE_API_URL||'/api';
export async function getContent(type){const r=await fetch(`${API}/content/${type}`);return r.json()}
export async function sendEnquiry(data){const r=await fetch(`${API}/enquiries`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});if(!r.ok)throw new Error('Unable to submit enquiry');return r.json()}
export async function login(email,password){const r=await fetch(`${API}/auth/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});const d=await r.json();if(!r.ok)throw new Error(d.message);return d}
export async function adminContent(token){const r=await fetch(`${API}/content`,{headers:{Authorization:`Bearer ${token}`}});return r.json()}
export async function saveContent(token,id,data){const r=await fetch(`${API}/content${id?`/${id}`:''}`,{method:id?'PUT':'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},body:JSON.stringify(data)});return r.json()}
export async function deleteContent(token,id){return fetch(`${API}/content/${id}`,{method:'DELETE',headers:{Authorization:`Bearer ${token}`}})}
export async function adminEnquiries(token){const r=await fetch(`${API}/enquiries`,{headers:{Authorization:`Bearer ${token}`}});return r.json()}
