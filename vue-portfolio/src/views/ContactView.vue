<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-content glass p-xl">
        <h1 class="text-gradient mb-lg">Get in Touch</h1>
        <p class="text-center mb-xl">
          Ready to bring your project to life? Let's discuss your ideas and create something amazing together.
        </p>
        
        <div class="contact-methods">
          <a href="mailto:matejcik.denis@gmail.com" class="contact-method glass">
            <div class="contact-icon">📧</div>
            <div class="contact-info">
              <h3>Email</h3>
              <p>matejcik.denis@gmail.com</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/denis-matejcik/" target="_blank" rel="noopener" class="contact-method glass">
            <div class="contact-icon">💼</div>
            <div class="contact-info">
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
            </div>
          </a>
          
          <a href="https://wa.me/qr/QCT7GFP2BR2IG1" target="_blank" rel="noopener" class="contact-method glass">
            <div class="contact-icon">💬</div>
            <div class="contact-info">
              <h3>WhatsApp</h3>
              <p>Quick chat</p>
            </div>
          </a>
          
          <a href="https://github.com/Mild-Solvent" target="_blank" rel="noopener" class="contact-method glass">
            <div class="contact-icon">👨‍💻</div>
            <div class="contact-info">
              <h3>GitHub</h3>
              <p>Check out my code</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 140px 0 var(--space-2xl);
  display: flex;
  align-items: center;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-content h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 900;
}

.contact-content p {
  color: var(--text-muted);
  font-size: var(--font-size-lg);
  line-height: var(--leading-relaxed);
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-lg);
  text-decoration: none;
  color: var(--text-primary);
  transition: all var(--duration-normal) var(--ease-out);
}

.contact-method:hover {
  transform: translateY(-4px);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.contact-icon {
  font-size: var(--font-size-3xl);
  min-width: 60px;
  text-align: center;
}

.contact-info h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xs);
}

.contact-info p {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .contact-methods {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
    padding: var(--space-lg);
  }
}
</style>