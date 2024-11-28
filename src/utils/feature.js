import resume from "@/assets/shadab_alam.pdf";

export const DownloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
