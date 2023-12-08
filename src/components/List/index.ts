import List from './List';
export default List;

// This is done so that the List component is imported in index.ts file and it then exports it when it is imported 
// in App.tsx file without specifying the name of the component. 
// Like in app.tsx :- import List from './components/List';
// otherwise we would have to write :- import List from './components/List/List';