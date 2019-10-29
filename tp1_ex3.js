function valider() {
  if(document.getElementById('texte').value == '') {
    document.getElementById('vide').innerHTML = 'Le champ est vide';
    return false;
  } else {
    document.getElementById('vide').innerHTML = '';
    alert('Le formulaire est envoyer');
    return true;
  }
}