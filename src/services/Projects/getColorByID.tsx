type Category = {
  id: string;
  name: string;
  color: string;
};

export default function getColorByID(id: string): Promise<string> {
  return fetch('http://localhost:5000/categories')
    .then((resp) => resp.json())
    .then((data) => {
      const categories: Category[] = data;
      if (categories && categories.length > 0) {
        const category = categories.find((cat) => cat.id === id.toString());
        if (category) {
          return category.color;
        } else {
          console.log('Categoria não encontrada');
          return 'bg-white';
        }
      } else {
        console.log('Nenhuma categoria disponível');
        return 'bg-white';
      }
    })
    .catch((err) => {
      console.error(err);
      return 'bg-white';
    });
}
