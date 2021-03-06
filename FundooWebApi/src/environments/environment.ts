

export const environment = {
  production: true,
  userApiURL:'http://localhost:8080/user',
  registerURL:'/register',
  loginURL:'/login',
  forgotpasswordURl:'/forgotpassword',
  resetpasswordURl:'/resetpassword',
  getAllusers:'getAllusers',

  notesApiURL:'http://localhost:8080/note',
  createnote:'/create',
  getAllNotes:'/getAllNotes/',
  pinNote:'/pin/',
  getPinNote:'/getPinned/',
  archieveNote:'/archieve/',
  getArchieveNote:'/getArchieve',
  getTrashNotes:'/getTrashed/',

  addcolor:'/addcolor/',
  updateNote:'/update',
  deleteNote:'/delete/',
  reminderNoteUrl:"/addReminder",
  removeremainder:'/removeReminder',
  addremainder:'addReminder',


  labelurl:'http://localhost:8080/label',
  getalllabels:'/getLabel',
  getLabels:'/note/lable',
  createLabel:'/create',
  getNotesByLabelId:'/note',
  deleteLabel:'/delete/',
  addLabel:'/addLabel',
  getlabelnotes:'/getlabelNotes',
  createadmap:'/createLabelMap',
  removemaplabel:'/remove',


  addCollabrator:'http://localhost:8080/addCollabrator'
};
