import { Bell, Check, ChevronDown, Search, X } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Status } from '../types';
export const StatusBadge=({value}:{value:Status|string})=><span className={'badge '+String(value).toLowerCase().replace(/\s/g,'-')}>{value}</span>;
export const Card=({children,className='' }:{children:ReactNode,className?:string})=><section className={'card '+className}>{children}</section>;
export const Stat=({label,value,delta,icon}:{label:string;value:string;delta:string;icon:ReactNode})=><Card className="stat"><div className="stat-icon">{icon}</div><div><p>{label}</p><h2>{value}</h2><small>{delta}</small></div></Card>;
export const SearchFilter=({value,onChange}:{value:string;onChange:(v:string)=>void})=><div className="search"><Search size={18}/><input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search complaints, residents..."/></div>;
export function Modal({open,title,children,onClose}:{open:boolean;title:string;children:ReactNode;onClose:()=>void}) { if(!open)return null; return <div className="overlay" onMouseDown={onClose}><div className="modal" onMouseDown={e=>e.stopPropagation()}><button className="icon-button close" onClick={onClose}><X size={19}/></button><h2>{title}</h2>{children}</div></div> }
export function Toast({message,onClose}:{message:string;onClose:()=>void}) { return <div className="toast"><Check size={18}/>{message}<button onClick={onClose}><X size={16}/></button></div> }
export function Header({name}:{name:string}) { return <header><div className="mobile-brand">H</div><SearchFilter value="" onChange={()=>{}}/><div className="header-actions"><button className="icon-button notification"><Bell size={20}/><i/></button><div className="avatar">AS</div><div className="user"><b>{name}</b><span>Resident · A-1204</span></div><ChevronDown size={17}/></div></header> }
