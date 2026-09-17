export type SiteData = { name:string; nameBn:string; tagline:string; taglineBn:string; established:number; phone:string; email:string; address:string; mission:string; vision:string; stats:{label:string; value:string}[] };
export type CommitteeMember = { name:string; role:string; bio:string };
export type Activity = { title:string; icon:string; text:string };
export type EventItem = { id:string; date:string; title:string; location:string; status:string; text:string };
export type Publication = { id:string; title:string; type:string; year:string; author:string; description:string };
