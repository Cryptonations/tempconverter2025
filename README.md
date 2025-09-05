# tempconverter2025

A simple Rust library to convert temperatures between Celsius, Fahrenheit, and Kelvin.

## Usage

Add this to your `Cargo.toml`:

```toml
tempconverter2025 = "0.1.1"
```

Then in your code:

```rust
use tempconverter2025::*;

fn main() {
    println!("{}", celsius_to_fahrenheit(0.0)); // 32.0
    println!("{}", fahrenheit_to_celsius(212.0)); // 100.0
    println!("{}", celsius_to_kelvin(100.0)); // 373.15
}
```

3) Внизу Commit message: `update README with examples` → **Commit changes**.

👉 Напиши: **Готово 2**.

---

### Шаг 3. Убедись, что код на GitHub совпадает с crates.io
1) Открой **src/lib.rs** → **Edit**.  
2) Вверху должна быть строка:
```rust
use rand::Rng;
pub fn random_temp() -> f64 {
    let mut rng = rand::thread_rng();
    rng.gen_range(-100.0..100.0)
}
