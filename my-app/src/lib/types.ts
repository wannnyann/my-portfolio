export type Profile = {
  id: number;
  name: string;
  description: string;
  firebase_uid: string; // textfirebase_uid → firebase_uid に修正
};

export type Achievement = {
  id: number;
  title: string;
  profile_id: string; // ここは profile_id の typo も修正
};

export type Skill = {
  id: number;
  profile_id: number;
  name: string;
};
