export function Filters(data, typeOrdenation, typePersona) {
  if (typeOrdenation === 1) {
      return data.slice().sort((a, b) => {
        const dataA = new Date(a.data.split('/').reverse().join('/'));
        const dataB = new Date(b.data.split('/').reverse().join('/'));
      
        return dataA < dataB ? 1 : dataA > dataB ? -1 : 0;

      });
  } else if (typeOrdenation === 2) {
      return data.slice().sort((a, b) => {
        const dataA = new Date(a.data.split('/').reverse().join('/'));
        const dataB = new Date(b.data.split('/').reverse().join('/'));
        
        return dataA < dataB ? -1 : dataA > dataB ? 1 : 0;

      });
    } else if (typeOrdenation === 3) {
        if(typePersona === 0){
            return data.slice().sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
          
                return titleA.localeCompare(titleB, 'pt-BR');
              });
        }
        else {
            return data.slice().sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
          
                return nameA.localeCompare(nameB, 'pt-BR');
              });
        }
    } else {
      return data;
    }
};