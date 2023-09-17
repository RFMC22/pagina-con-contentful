import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_DELIVERY_API_KEY
})

const fetchProjects = async () =>{
  const response = await client.getEntries({content_type: 'projects'});
  console.log(response.items);
}

fetchProjects();