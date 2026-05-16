export async function createMessage(req, res) {
  try {
    console.log("BODY:", req.body);

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    res.status(201).json({
      ok: true,
      message: "Message received successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
}

export async function listMessages(req, res) {
  res.json({
    messages: [],
  });
}