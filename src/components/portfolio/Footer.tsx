export const Footer = () => {
  return (
    <footer className="py-6 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Subharthi Dutta. All Rights Reserved.</p>
      </div>
    </footer>
  );
};