    document.getElementById('Button').addEventListener('click', function(event) {
        
        event.preventDefault();
        
    const username = document.getElementById('username').value;
    
    const email = document.getElementById('email').value;

    const message = "Nuevo usuario registrado: " + username + "  " + email;

    const whatsappUrl = 'https://wa.me/+5363238283?text=' + message;
        
    window.open(whatsappUrl);
        
    document.getElementById('userForm').reset();
    
    const tiendaSection = document.getElementById('tienda');
    
    if (tiendaSection) {
        tiendaSection.style.display = 'block';
        
    } else {
        console.error('Elemento con ID "tienda" no encontrado.');
    }
});