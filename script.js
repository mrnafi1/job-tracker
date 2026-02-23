
function handleStatus(id, newStatus) {
    const statusBadge = document.getElementById(`status-${id}`);
    
    
    const currentStatus = statusBadge.innerText.trim().toUpperCase();
    
    
    if (currentStatus === newStatus) return;

    if (currentStatus === 'INTERVIEW') {
        updateHeaderCount('interview-count', -1);
    } 
    
    else if (currentStatus === 'REJECTED') {
        updateHeaderCount('rejected-count', -1);
    }

    
    if (newStatus === 'INTERVIEW') {
        statusBadge.innerText = 'Interview';
        statusBadge.className = "bg-green-100 text-green-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider";
        updateHeaderCount('interview-count', 1);
    } 
    else if (newStatus === 'REJECTED') {
        statusBadge.innerText = 'Rejected';
        statusBadge.className = "bg-red-100 text-red-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider";
        updateHeaderCount('rejected-count', 1);
    }
}


function updateHeaderCount(elementId, amount) {
    const countElement = document.getElementById(elementId);
    let currentCount = parseInt(countElement.innerText);
    
    
    countElement.innerText = currentCount + amount;
}
