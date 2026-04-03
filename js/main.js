// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const toggle = question.querySelector('.faq-toggle');
    
    // Закрываем все остальные
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.display = 'none';
        item.querySelector('.faq-toggle').textContent = '+';
      }
    });
    
    // Открываем/закрываем текущий
    if (faqItem.classList.contains('active')) {
      faqItem.classList.remove('active');
      answer.style.display = 'none';
      toggle.textContent = '+';
    } else {
      faqItem.classList.add('active');
      answer.style.display = 'block';
      toggle.textContent = '−';
    }
  });
});

// Form Submission
const form = document.getElementById('rsvpForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('guest-name')?.value || '',
      attendance: document.querySelector('input[name="attendance"]:checked')?.value || '',
      alcohol: Array.from(document.querySelectorAll('input[name="alcohol"]:checked')).map(cb => cb.value),
      diet: document.querySelector('input[name="diet"]:checked')?.value || '',
      dietNote: document.querySelector('input[name="diet-note"]')?.value || '',
      transfer: document.querySelector('input[name="transfer"]:checked')?.value || '',
      timestamp: new Date().toISOString()
    };
    
    if (!formData.name) {
      alert('Пожалуйста, введите ваше имя и фамилию');
      return;
    }
    
    if (!formData.attendance) {
      alert('Пожалуйста, укажите, сможете ли вы быть на свадьбе');
      return;
    }
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    // Временное логирование (позже заменим на Google Sheets)
    console.log('Данные формы:', formData);
    
    setTimeout(() => {
      alert('Спасибо! Ваш ответ сохранен.');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 500);
  });
}