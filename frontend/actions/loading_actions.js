export const RECEIVE_LOADING = "RECEIVE_LOADING";

export const receiveLoading = (loading) => {
  return {
    type: RECEIVE_LOADING,
    loading
  };
};
