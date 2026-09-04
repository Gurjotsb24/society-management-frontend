export type Role = 'Resident' | 'Staff' | 'Admin';
export type Status = 'Open' | 'In progress' | 'Resolved' | 'Pending' | 'Paid';
export interface Complaint { id:string; title:string; category:string; priority:'High'|'Medium'|'Low'; status:Status; date:string; assignee:string; }
export interface Announcement { title:string; body:string; time:string; important?:boolean; }
