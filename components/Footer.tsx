const thisYear: string = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className="grid place-items-center py-8">
      <p className="self-center lg:p-2">&copy; {thisYear} John Apella</p>
    </footer>
  );
};

export default Footer;
