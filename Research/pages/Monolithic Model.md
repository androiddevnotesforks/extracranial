---
lang: 'en'
slug: '/E99A6B'
---

```
PhysicsObject → StuffedAnimal
              → FloatingObject
              → DestructibleObject
```

## Problems

- Bubble-Up Effect
  - What if we want to make `StuffedAnimal` floatable?
  - The **floating** behavior will be bubbled up.
- Solution [[Pure Component Model]]
