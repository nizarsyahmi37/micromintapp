import { ProfileContent } from "./profile-content";

export default function ProfilePage({ params }: { params: { username: string } }) {
  return <ProfileContent username={params.username} />;
}