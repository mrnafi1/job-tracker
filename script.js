
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
function filterJobs(filterType) {
    
    const allBtn = document.getElementById('all-btn');
    const interviewBtn = document.getElementById('interview-btn');
    const rejectedBtn = document.getElementById('rejected-btn');

    const defaultClass = "text-gray-500 hover:bg-gray-100 px-6 py-2 rounded-md text-sm font-medium transition";
    const activeClass = "bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium";

    if (allBtn) allBtn.className = defaultClass;
    if (interviewBtn) interviewBtn.className = defaultClass;
    if (rejectedBtn) rejectedBtn.className = defaultClass;

    if (filterType === 'ALL') allBtn.className = activeClass;
    else if (filterType === 'INTERVIEW') interviewBtn.className = activeClass;
    else if (filterType === 'REJECTED') rejectedBtn.className = activeClass;

    
    const allCards = document.querySelectorAll('#job-container > div:not(#no-jobs-container)');
    const noJobsBox = document.getElementById('no-jobs-container');
    let visibleCount = 0;

    allCards.forEach(card => {
        const statusBadge = card.querySelector('[id^="status-"]');
        const currentStatus = statusBadge.innerText.trim().toUpperCase();

        if (filterType === 'ALL' || currentStatus === filterType) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    
    const jobCountSpan = document.getElementById('job-count'); 
    const totalCount = allCards.length;

    if (filterType === 'ALL') {
        jobCountSpan.innerText = totalCount; 
    } else {
        if (visibleCount > 0) {
            jobCountSpan.innerText = `${visibleCount} of ${totalCount}`; 
        } else {
            jobCountSpan.innerText = '0';
        }
    }

    
    if (visibleCount === 0) {
        noJobsBox.classList.remove('hidden');
    } else {
        noJobsBox.classList.add('hidden');
    }
}

function deleteJob(id) {
    
    const card = document.getElementById(`job-card-${id}`);
    const statusBadge = document.getElementById(`status-${id}`);
    const currentStatus = statusBadge.innerText.trim().toUpperCase();

    
    updateHeaderCount('total-count', -1);
    
    
    if (currentStatus === 'INTERVIEW') {
        updateHeaderCount('interview-count', -1);
    } else if (currentStatus === 'REJECTED') {
        updateHeaderCount('rejected-count', -1);
    }

    
    card.remove();

    
    filterJobs('ALL');
}