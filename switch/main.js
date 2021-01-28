var key = parseInt(prompt("Ingrese una ocpión: "));
switch (key) {
    case 1:
        console.log(`Opción Uno`);
        break;  
    case 2:
        console.log(`Opción Dos`);
        break;                      
    case "2":
            console.log(`Opción Dos String`);
            break; 
    default:
        console.log(`Opción incorrecta`);
        break;
}