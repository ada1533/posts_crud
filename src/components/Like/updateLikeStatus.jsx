import axios from 'axios';

const updateLikeStatus = async (postId, newLikeStatus) => {
  const axiosInstance = axios.create({
    timeout: 10000,
  });

  try {
    const response = await axiosInstance.patch(`http://localhost:8000/posts/${postId}`, {
      like: newLikeStatus,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request was canceled:', error.message);
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timed out:', error.message);
    } else {
      console.error('Error updating like status:', error);
    }
  }
};

export default updateLikeStatus;
