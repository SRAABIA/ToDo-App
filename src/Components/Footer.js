import React from 'react'
// Footer is declared as a constant using const. This means you cannot reassign Footer to a different value.
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center" style={{position: 'fixed', bottom: 0, width: '100%', boxShadow: '0 -2px 5px rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        Credit &copy; Raabia | Follow us on
        
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-warning mx-2">
          Facebook
        </a>
        | Designed with <span style={{color: '#e25555'}}>&hearts;</span> for you.
      </div>
    </footer>
  );
}

export default Footer
