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
