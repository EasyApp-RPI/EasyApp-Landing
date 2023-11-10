function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '30px', backgroundColor: '#f0f0f0' }}>
      © {   year} EasyApp, an RCOS project. All rights reserved.
        </footer>
    );
}

export default Footer