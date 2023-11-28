export interface Sites {
  id: string,
  name: string,
}

export interface Systems {
  id: string;
  name: string;
  site_id: string;
}

export interface Alarms {
  id: string;
  system_id: string;
  is_active: boolean;
  created_at: string;
}

export interface Users {
  id: string;
  username: string;
  password_hash: string;
}

export interface UsersSites {
  user_id: string;
  site_id: string;
}

// Database relations
// Alarms.system_id n-1 Systems.id
// Systems.site_id n-1 Sites.id
// UsersSites.user_id n-1 Users.id
// UsersSites.site_id n-1 Sites.id
