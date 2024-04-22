type Category = {
  id: string;
  name: string;
  color: string;
};

export default function getColorByID(id: number): Promise<string> {
  if (isNaN(id)) {
    return Promise.resolve('');
  }

  return fetch('http://localhost:5000/categories')
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Failed to fetch categories');
      }
      return resp.json();
    })
    .then((categories: Category[]) => {
      const category = categories.find((cat) => cat.id === String(id));
      if (category) {
        return category.color;
      } else {
        return '';
      }
    })
    .catch((err) => {
      return '';
    });
}
