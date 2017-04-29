// // actions = {
// //   add: 'add',
// //   delete: 'delete',
// //   deleteAll: 'deleteAll',
// //   select: 'select',
// //   onInput: 'onInput',
// //   fetchData: 'fetchData',
// //   sortBy: 'sortBy',
// //   type: ['REDDIT', 'TWITCH', 'YOUTUBE'],
// // };
//
// // state = {
// //   channelData: 'channelData',
// //   formInput: 'formInput',
// //   sidebarStatus: 'sidebarStatus',
// //   sortBy: 'sortBy',
// //   user: 'user',
// //   navbarToggle: 'navbarToggle  '
// // };
//
// // funcs = {
// //   onSelectClick: 'onSelectClick',
// //   onDeleteClick: 'onDeleteClick'
// // }
//
// import {Component} from 'react';
// import DeleteButton from './deleteButton';
//
// function makeSidebar(state, actions, funcs) {
//   return class extends Component {
//     render() {}
//   };
// }
//
// function generateForm(
//   options = {
//     addAction: '',
//     inputAction: '',
//     inputVal: '',
//     csrf_token: '',
//     type: '',
//     deleteAction: '',
//   }
// ) {
//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault();
//         options.addAction(options.inputVal, options.csrf_token);
//         options.inputAction('');
//       }}
//     >
//       {inputField(options)}
//       {addButton()}
//       <DeleteButton type={options.} />
//
//     </form>
//   );
// }
//
// function inputField(options = {inputVal: '', inputAction: '', type: ''}) {
//   return (
//     <FormControl
//       className="sidebar__wrapper__input"
//       placeholder={options.type === 'REDDIT' ? 'Add subreddit' : 'Add channel'}
//       value={options.inputVal}
//       onChange={event => options.inputAction(event.target.value)}
//     />
//   );
// }
