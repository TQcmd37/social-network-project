import create from 'zustand';

const useAuthStore = create((set) => {
  const isLoggedInFromLocalStorage = localStorage.getItem('isLoggedIn') === 'true';

  return {
    user: null,
    rol: null,
    isLoggedIn: isLoggedInFromLocalStorage,
    profilePicture: 'https://static.vecteezy.com/system/resources/previews/002/519/144/non_2x/social-media-avatar-free-vector.jpg',

    login: (userData) =>
      set((state) => {
        localStorage.setItem('isLoggedIn', 'true');

        return {
          ...state,
          user: userData,
          rol: getRoleNameFromRoleId(userData.id_rol),
          isLoggedIn: true,
          profilePicture: userData.profile_picture,
        };
      }),

    logout: () =>
      set((state) => {
        localStorage.removeItem('isLoggedIn');

        return {
          ...state,
          user: null,
          rol: null,
          isLoggedIn: false,
        };
      }),

    updateProfilePicture: (url) =>
      set((state) => ({
        ...state,
        profilePicture: url,
      })),
  };
});

const getRoleNameFromRoleId = (roleId) => {
    if (roleId === 1) {
        return 'user';
    }
    if(roleId === 2) {
        return 'admin';
    }
};

export default useAuthStore;
