export interface CreateTeamInterface {
  name: string;
  slug: string;
  teamMembers: TeamMember[];
  }
  interface TeamMember {
    userId: number;
    name: string;
    email: string;
  }
  export interface TeamInviteInterface{
    teamMembers: TeamMember[],
    role:string,
    teamId:string
  }

  export interface TeamInviteIsAcceptInterface{
    teamId:string,
    accept:boolean
  }
  
  