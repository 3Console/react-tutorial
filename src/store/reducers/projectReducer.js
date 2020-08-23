const initState = {
  projects: [
    {id: '1', title: 'Project A', content: 'blah blah blah'},
    {id: '2', title: 'Project B', content: 'blah blah blah'},
    {id: '3', title: 'Project C', content: 'blah blah blah'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': 
      console.log('created project', action.project);
  }
  return state;
}

export default projectReducer;
