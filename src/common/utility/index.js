
export const array = {
    replaceOrAddItem: (array, newItem, conditionFunction) => {
        const index = array.findIndex( conditionFunction );
        if (index !== -1) {
          // Item exists, replace it
          array[index] = newItem;
        } else {
          // Item doesn't exist, add it
          array.push(newItem);
        }
    },
    findAndRemoveItem: (array, conditionFunction) => {
      const index = array.findIndex( conditionFunction );
      if (index !== -1) {
        array.splice(index, 1);
      }
    }
}


