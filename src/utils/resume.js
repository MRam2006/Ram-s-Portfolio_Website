export const RESUME_PATH = '/resume/Ramakrishnan_M.pdf';
export const RESUME_FILENAME = 'Ramakrishnan_M.pdf';

export const viewResume = () => {
  window.open(RESUME_PATH, '_blank', 'noopener,noreferrer');
};

export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = RESUME_PATH;
  link.download = RESUME_FILENAME;
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
