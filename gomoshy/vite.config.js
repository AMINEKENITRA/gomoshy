[build]
  base = "gomoshy"          # tells Netlify to run build commands inside /gomoshy folder
  publish = "gomoshy/dist"  # tells Netlify to deploy the 'dist' folder inside /gomoshy
  command = "npm run build"
