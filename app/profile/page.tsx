import { getUserProjects } from '@/lib/actions';
import ProfilePage from '@/components/ProfilePage';
import { UserProfile } from '@/common.types';

type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({ params }: Props) => {
  try {
    const result = (await getUserProjects(params.id, 100)) as { user: UserProfile } | null;

    if (!result?.user) {
      return <p className="no-result-text">Failed to fetch user info</p>;
    }

    return <ProfilePage user={result.user} />;
  } catch (error) {
    console.error('Error fetching user projects:', error);
    return <p className="no-result-text">Failed to fetch user info</p>;
  }
};

export default UserProfile;