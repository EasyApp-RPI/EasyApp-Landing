// Footer for the project, own component to keep it throughout all the pages.
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '30px', border: 'dotted'}}>
      © {   year} EasyApp, an RCOS project. All rights reserved.
        </footer>
    );
}

export default Footer