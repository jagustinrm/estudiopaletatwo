export async function fetchJson(filePath) {
 
      console.log("Intentando cargar:", filePath);
      const response = await fetch(filePath);
      console.log("Respuesta recibida:", response);

      if (response.ok) {
        const data = await response.json();
        console.log("Datos cargados:", data);
        return data;
      } 

}