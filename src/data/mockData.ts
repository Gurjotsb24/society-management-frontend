import type { Announcement, Complaint } from '../types';
export const complaints: Complaint[] = [
 {id:'CMP-1042',title:'Water seepage in kitchen ceiling',category:'Maintenance',priority:'High',status:'In progress',date:'Today, 9:30 AM',assignee:'Arjun Mehta'},
 {id:'CMP-1038',title:'Streetlight near Tower B is off',category:'Electrical',priority:'Medium',status:'Open',date:'Yesterday',assignee:'Unassigned'},
 {id:'CMP-1029',title:'Lift panel button needs repair',category:'Electrical',priority:'Low',status:'Resolved',date:'Aug 28',assignee:'Ravi Kumar'},
 {id:'CMP-1022',title:'Garden sprinkler timing',category:'Common Area',priority:'Low',status:'Resolved',date:'Aug 25',assignee:'Priya Singh'}
];
export const announcements: Announcement[] = [
 {title:'Water supply maintenance',body:'Water supply will be paused between 11 AM and 2 PM this Sunday.',time:'2 hours ago',important:true},
 {title:'Ganesh Chaturthi celebrations',body:'Join us at the clubhouse this Saturday at 6 PM.',time:'Yesterday'},
 {title:'New visitor parking policy',body:'Please register guest vehicles through the visitor portal.',time:'Aug 28'}
];
export const activities = ['Your payment of ₹4,850 was received','Booking confirmed for Clubhouse · Sep 07','Complaint CMP-1042 was assigned to Arjun','Visitor approval requested for Rohan Shah'];
